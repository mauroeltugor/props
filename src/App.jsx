import Name from './components/Name';
import Product from './components/Product';
import Calculator from './components/Calcu';
import ContactForm from './components/Form';
import Age from './components/Age';
import Grade from './components/Grade';
import Menu from './components/Menu';
import ProfessionalCard from './components/Target';
import SocialMedia from './components/Social';
import Weather from './components/weather';
import Pokemon from './components/pokemon';
import City from './components/city';
import Computer from './components/Computer';
import Buttom from './components/Buttom';
import Barber from './components/Barber';
import Bakery from './components/bakery';
import Soldier from './components/Soldiers';
import Gallery from './components/Gallery';
import './App.css';

function App() {
  const photo = {
    glass: require('./images/glass.jpg'),
    restaurnt: require('./images/restaurant.jpg'),
    sofware: require('./images/clement-helardot-95YRwf6CNw8-unsplash.jpg'),
    rain: require('./images/anna-atkins-rNBaaxyeWWM-unsplash.jpg'),
    pikachu: require('./images/mikel-N7OocKwsJ0s-unsplash.jpg'),
    bogota: require('./images/random-institute-GkacI-_mGlg-unsplash.jpg'),
    pc: require('./images/andre-tan-8yesL5ZPjIU-unsplash.jpg'),
    barber: require('./images/allef-vinicius-IvQeAVeJULw-unsplash.jpg'),
    soldier: require('./images/sander-sammy-kcwkT7mc0fU-unsplash.jpg')
  };
  const size = {
    glass:{width: '10%', height: '10%'},
    restaurnt:{width:'13%', height:'13%'},
    sofware:{width:'50%', height:'50%'},
    bogota:{width: '54%',height: '50%',paddingBottom:'10%',paddingTop: '2%'},
    pc:{height:'77%', width:'30%'}
  }/**Product */
  const number1 = 1512;/** Calculator*/
  const number2 = 23165;/** Calculator*/
  const age = 18;/**Age*/
  const futureAge = age + 10;/**Age */
  const grade1 = 4.5;/**Grade */
  const grade2 = 3.3;/**Grade */
  const grade3 = 2.2;/**Grade */
  const finalGrade = (grade1+grade2+grade3)/3;/**Grade */
  const description = 'Bogotá is the capital of Colombia and one of the largest cities in South America. Located in the center of the country, it sits at an altitude of approximately 2,640 meters above sea level, making it one of the highest capitals in the world.'
  const pcDescription = 'This pc have 16 gb of ram and an ryzen 5 3400G with 6 fans a m2 disk of 1tb with a power supply unit Gold certificate'

  return (
    <div className="App">
      <Name name='Mauro' phoneNumber='3234366000' />

      <Product style={size.glass} image={photo.glass} name='Glasses' price='250.000'/>

      <Calculator number1={number1} operator='+' number2={number2} operator2='=' result={number1+number2} />

      <ContactForm nombre='Jeison' email='jeisonxd@gmail.com' />

      <Age name='martin' age={age} futureAge={futureAge}/>

      <Grade student='Isabel' grade1={grade1} grade2={grade2} grade3={grade3} finalGrade={finalGrade} />

      <Menu style={size.restaurnt} restaurantName='The best restaurant' logo={photo.restaurnt} mainCourse='steamed vegetables' soup='Tomatoe soup' dessert='oreo cake' protein='fried chicken'/>

      <ProfessionalCard companyName="Tugor's corp" worker='Andres Celis' profession='Software developer' phoneNumber='3234366000'/>
      
      <SocialMedia style={size.sofware} name='Sandra' image={photo.sofware}/>

      <Weather climate='RAIN' image={photo.rain} style={size.restaurnt} temperature='26°'/>

      <Pokemon name='pikachu' power='50+' life='basic' image={photo.pikachu} style={size.restaurnt} />

      <City city='Bogota' description={description} map={photo.bogota} style={size.bogota}/>   

      <Computer price='3.600.000' description={pcDescription} image={photo.pc} style={size.pc}/>   

      <Buttom style='red' buttonName='Carro' nombre='CLASS GLA 35 AMG' link='https://alemautos.com.co/vehiculos/todos-los-modelos/suvs/gla-35-amg' />

      <Barber style={size.restaurnt} name='Torres cuts' address='Unicentro' price='15.000' price2='20.000' price3='40.000' logo={photo.barber} />

      <Bakery toast='avocado toast' coffee='capuchino' milkshake='chocolate' bread='Coco bread'/>

      <Soldier sedeName='great elemental unit' idBattalion='55452553365' cantSoldiers='2.5000'/>

      <Gallery style={size.restaurnt} image1={photo.barber} image2={photo.barber} image3={photo.barber} image4={photo.barber} image5={photo.barber} image6={photo.barber} image7={photo.barber} image8={photo.barber} image9={photo.barber}/>
    </div>
  );
}

export default App;
