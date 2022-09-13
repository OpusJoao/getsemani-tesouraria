import Card from './components/card'
import axios from 'axios'
function Home({payments}) {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {payments.map((payment) => {
        return (
        <Card 
          key={payment._id}
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


export async function getServerSideProps() {
  const requestPayments = await axios.get(`${process.env.URL_BACKEND}/payments`).then(response => {
    return response
  })
  return {
    props: {
      payments : requestPayments.data
    },
  }
}

export default Home