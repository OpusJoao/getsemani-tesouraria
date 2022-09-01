import Card from './components/card'

function Home({payments}) {
  payments = payments ? JSON.parse(payments) : []
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {payments.map((payment) => {
        return (
        <Card 
          key={payment.id}
          icon={payment.img} 
          buttonText={'Pagar'} 
          title={payment.title} 
          linkTo={`/payment-info/${payment.id}`}/>
          )
      })}
      <span style={{color: '#9F9F9F', marginTop: '3rem'}}>Estes são os únicos pagamentos</span>
    </div>
  )
}

Home.getInitialProps =  () => {
  return {payments : process.env.PAYMENTS}
}

export default Home