import React, { Component } from 'react'
import styles from './App.module.css'
import { Chart, Cards, CountryPicker } from './components'
import { fetchData } from './api'
import coronaImage from './images/image.png'
import Footer from './Footer'

class App extends Component {
  state =  {
    data: {},
    country:''
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
   this.setState({ data:fetchedData })
  }

  handleCountryChange = async(country)=>{
    const fetchedData = await fetchData(country)
  //console.log(country)
  this.setState({data:fetchedData, country: country})
  }

  render() {
    const { data,country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt='logo'/>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
        <Footer />
      </div>
    )
  }
}

export default App
