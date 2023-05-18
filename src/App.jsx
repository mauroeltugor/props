import Name from './components/1Name';
import Product from './components/2Product';
import Calculator from './components/3Calcu';
import ContactForm from './components/4form';
import Age from './components/5age';
import Grade from './components/6';
import './App.css';

function App() {
  const glassImage = {img: require('./images/glass.jpg')};/**Product */
  const size = {width: '10%', height: '10%'}/**Product */
  const number1 = 1512;/** Calculator*/
  const number2 = 23165;/** Calculator*/
  const age = 18;/**Age*/
  const futureAge = age + 10;/**Age */
  const grade = [3.5, 2.4, 4.8 ];/**Grade */
  let result = 0;
    for(let i = 0;  i < grade.length; i +=1){
      result += i;
      return result;
    }

  return (
    <div className="App">
      <Name name='Mauro' phoneNumber='3234366000' />

      <Product style={size} image={glassImage.img} name='Glasses' price='250.000'/>

      <Calculator number1={number1} operator='+' number2={number2} operator2='=' result={number1+number2} />

      <ContactForm nombre='Jeison' email='jeisonxd@gmail.com' />

      <Age name='martin' age={age} futureAge={futureAge}/>

      <Grade student='Isabel' grade1={grade(0)} grade2={grade(1)} grade3={grade(2)} finalGrade={result} />

    </div>
  );
}

export default App;
