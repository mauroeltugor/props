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
import HotelReser from './components/Hotel';
import Music from './components/Music';
import Field from './components/SoccerField';
import Vape from './components/vapeStore';
import Cv from './components/Cv';
import Kages from './components/Naruto';
import Moons from './components/Moon';
import Food from './components/Food';
import Pilar from './components/Pilar';
import Gym from './components/Gym';
import Coctel from './components/Coctel';
import Map from './components/Maps';
import Software from './components/Software';

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
    soldier: require('./images/sander-sammy-kcwkT7mc0fU-unsplash.jpg'),
    eladio: require('./images/3men2.jfif'),
    tiger: require('./images/tigers.png'),
    tapita:require('./images/tapita.jpg'),
    onion: require('./images/onion.jfif'),
    vape: require('./images/vape.jfif'),
    developer: require('./images/FOTO-MAURICIO-CELIS.jpg'),
    food: require('./images/food.jpeg'),
    imc: require('./images/tabla-IMC-624x411.webp'),
    ron: require('./images/freecuba.webp'),
    daikiri: require('./images/daikiri.jpeg'),
    mojito: require('./images/mojito.jpg'),
    map: require('./images/maps.jpeg')
  };

  const pillars = {
    rock: require('./images/rock.webp'),
    fire: require('./images/fire.webp'),
    love: require('./images/love.webp'),
    wind: require('./images/wind.webp')
  }

  const kages = {
    hokage: require('./images/hoka.jfif'),
    tsuchikage: require('./images/tsu.jfif'),
    kazekage: require('./images/kaze.jfif'),
    raikage: require('./images/raika.jfif'),
    mizukage: require('./images/mizu.jfif')
  }

  const cars = {
    car1: require('./images/auto-fan-NnFFIKITNyQ-unsplash.jpg'),
    car2: require('./images/aaron-huber-8qYE6LGHW-c-unsplash.jpg'),
    car3: require('./images/devon-janse-van-rensburg-yoqHLUayUTg-unsplash.jpg'),
    car4: require('./images/dhiva-krishna-yXmjBxvkoG4-unsplash.jpg'),
    car5: require('./images/joey-banks-YApiWyp0lqo-unsplash.jpg'),
    car6: require('./images/kahl-orr-E36kvVnjOBk-unsplash.jpg'),
    car7: require('./images/olav-tvedt-6lSBynPRaAQ-unsplash.jpg'),
    car8: require('./images/tim-meyer-AsT9Dt11FkA-unsplash.jpg'),
    car9: require('./images/toni-zaat-bKqNW5Dq6p8-unsplash.jpg')
  }

  const moons = {
    moon1: require('./images/kokushibo.jfif'),
    moon2: require('./images/Doma.jfif'),
    moon3: require('./images/Akaza.jfif'),
    moon4: require('./images/hantengu.jfif'),
    moon5: require('./images/Gyokko.jfif'),
    moon6: require('./images/gyutaro.jfif')
  }

  const size = {
    glass:{width: '10%', height: '10%'},
    restaurnt:{width:'13%', height:'13%'},
    sofware:{width:'50%', height:'50%'},
    bogota:{width: '54%',height: '50%',paddingBottom:'10%',paddingTop: '2%'},
    pc:{height:'77%', width:'30%'},
    field:{display:'flex',textAlign:'center',alignItems:'center',justifyContent:'space-between', padding:'0 20%'},
    naruto:{width:'53%', height:'62%'}
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

      <Gallery style={size.restaurnt} image1={cars.car1} image2={cars.car2} image3={cars.car3} image4={cars.car4} image5={cars.car5} image6={cars.car6} image7={cars.car7} image8={cars.car8} image9={cars.car9}/>
    
      <HotelReser nameReserv='Pancho Perez' rooms='3 rooms' people='6 people' days='5 days'/>

      <Music style={size.restaurnt} logo={photo.eladio} name='Si La Calle Llama (Remix)(Con Myke Towers)' duration='4:00'/>

      <Field style={size.field} idCancha1='1' idCancha2='2' idCancha3='3' hora1='14:30' hora2='9:00' hora3='9:15' team1='The tigers' team2='Tapitas FC' team3='thousand onion' logo1={photo.tiger} logo2={photo.tapita} logo3={photo.onion}/>

      <Vape image={photo.vape} style={size.bogota}/>

      <Cv photo={photo.developer} fullName='Andres Mauricio Celis Reyes' style={size.restaurnt}/>

      <Kages hokage={kages.hokage} kazekage={kages.kazekage} mizukage={kages.mizukage} tsuchikage={kages.tsuchikage} raikage={kages.raikage} style={size.naruto}  />

      <Moons moon1={moons.moon1} moon2={moons.moon2} moon3={moons.moon3} moon4={moons.moon4} moon5={moons.moon5} moon6={moons.moon6}/>

      <Food image={photo.food} question='What is it?'/>

      <Gym height={1.80} weight={83} image={photo.imc}/>

      <Pilar rock={pillars.rock} love={pillars.love} wind={pillars.wind} fire={pillars.fire} style={size.naruto}/>

      <Coctel mojito={photo.mojito} daikiri={photo.daikiri} freeCuba={photo.ron} style={size.restaurnt}/>

      <Map image={photo.map} tittle='The Cathedral of Murcia' />

      <Software career1='Software Engineering' career2='Data Science' career3='Mobile App Development' career4='Cybersecurity' career5='Software Architecture'/>
      
    </div>
  );
}

export default App;
