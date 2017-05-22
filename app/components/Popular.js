var React = require('react');
var api = require('../utils/api');

class SelectLanguage extends React.Component {
  render() {
    let languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

    return(
      <ul className="languages">
      {
        languages.map((lang) => {
          return (
            <li
              style={lang === this.props.selectedLanguage ? { color: '#B1EDE8'}: null}
              key={lang}
              onClick={this.props.onSelect.bind(null, lang)}>
              {lang}
            </li>
          )
        })}
    </ul>
    )
  }
}

SelectLanguage.propTypes = {
  selectedLanguage: React.PropTypes.string.isRequired,
  onSelect: React.PropTypes.func.isRequired,
}

class Popular extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selectedLanguage: 'All',
      repos: null
    }

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentDidMount(){
    //ajax
    api.fetchPopularRepos(this.selectedLanguage)
    .then(function(repos){
      let each = repos.map(function(repo){
        return <li>{repo}</li>
      })
    })
  }

  updateLanguage(lang){
    this.setState(function(){
      return{
        selectedLanguage: lang,
      }
    })
  }

  render(){

    return(
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}/>
      </div>
    )
  }
}

module.exports = Popular;
