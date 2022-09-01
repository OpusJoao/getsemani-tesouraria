import { useRouter } from 'next/router';
import Button from '../../components/button';
import Card from '../../components/card';
import CardInfo from '../../components/cardInfo';

export default function PaymentInfo(props){
  const router = useRouter();
  const {id} = router.query
  return(
    <div>
      <Card 
        hasButton={false} 
        icon={'/img/icons/camping.png'} 
        buttonText={'Pagar'} 
        title={'[Jovens] - Acampaget'} 
        linkTo={'/payment-info/1'}
        />
      <Card 
        hasButton={false} 
        icon={'/img/icons/money.png'} 
        buttonText={'Pagar'} 
        title={'Tesoureiro: João Ferreira\n(15) 98829-9752'} 
        linkTo={'/payment-info/1'}
        additonalInformation={
          <div style={{width:'100%'}}>
            <Button 
              text='Iniciar conversa no WhatsApp' 
              bgColor='#44B564' 
              link={'https://wa.me/+5515988299752'}
              />
            <CardInfo 
              title={'PIX'} 
              img={'/img/icons/qrcode.png'} 
              footer={'123123codigopix12313.oim.br1231231'} 
              text={'Nome: João Vitor Antunes Ferreira\nValor: R$ 80,00\nBanco: Santander'}
              />
            <Button 
              text='Copiar código PIX' 
              ableToCopy={true} 
              textToCopy={'123123codigopix12313.oim.br1231231'}
              />
            <CardInfo 
              title={'Dados Bancários'} 
              hasImg={false}
              footer={''} 
              text={'Nome: João Vitor Antunes Ferreira\nCPF: 518.614.948-90\nNº Conta:\nAgência:\nTipo: Conta Corrente'}
              />
            <Button 
              text='Enviar comprovante de depósito'
              link={'https://wa.me/+5515988299752'}
              />
          </div>}
        />
    
    </div>
  )
}