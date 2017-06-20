var React = require('react');
var api = require('../utils/api');

class SelectLanguage extends React.Component {
  render() {
    let languages = [
      'All',
      'JavaScript',
      'Ruby',
      'Java',
      'CSS',
      'Python',
    ];

    return (
      <ul className="languages">
        {languages.map((lang) => {
          return (
            <li style={lang === this.props.selectedLanguage
              ? {
                color: '#B1EDE8'
              }
              : null} key={lang} onClick={this.props.onSelect.bind(null, lang)}>
              {lang}
            </li>
          )
        })}
      </ul>
    )
  }
}

function RepoGrid(props) {
  return (
    <ul className="popular-list">
      {props.repos.map(function(repo, index) {
        return (
          <li key={repo.name} className="popular-item">
            <div className="popular-rank">#{index + 1}</div>
            <ul className="space-list-items">
              <li>
                <img src={repo.owner.avatar_url} alt={'Avatar for ' + repo.owner.login} className="avatar"/>
              </li>
              <li>
                <a href={repo.html_url}>{repo.name}</a>
              </li>
              <li>@{repo.owner.login}</li>
              <li>{repo.stargazers_count} stars</li>
            </ul>
          </li>
        )
      })}
    </ul>
  )
}

RepoGrid.propTypes = {
  repos: React.PropTypes.array.isRequired,
}

SelectLanguage.propTypes = {
  selectedLanguage: React.PropTypes.string.isRequired,
  onSelect: React.PropTypes.func.isRequired
}

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All',
      repos: null,
    }
    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage)
  }

  updateLanguage(lang) {
    this.setState(function() {
      return {selectedLanguage: lang}
    });

    //ajax
    api.fetchPopularRepos(lang).then(function(repos) {
      console.log(repos);
      this.setState(function() {
        return {repos: repos}
      })
    }.bind(this));
  }

  render() {
    return (
      <div>
        <SelectLanguage selectedLanguage={this.state.selectedLanguage} onSelect={this.updateLanguage}/>
        {!this.state.repos ? <p>Loading</p> :
          <RepoGrid repos={this.state.repos} />}
      </div>
    )
  }
}

module.exports = Popular;
