import Card from './components/card'

export default function Home() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
      <Card 
       icon={'/img/icons/camping.png'} 
       buttonText="Pagar" 
       title={'[Jovens] - Acampaget'} 
       linkTo={'/payment-info/1'}/>
      <span style={{color: '#9F9F9F', marginTop: '3rem'}}>Estes são os únicos pagamentos</span>
    </div>
  )
}
