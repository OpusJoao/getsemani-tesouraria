import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Button from '../../components/button';
import Card from '../../components/card';
import CardInfo from '../../components/cardInfo';

function PaymentInfo({currentPaymentInfo}){
  return(
    <div>
      <Card 
        hasButton={false} 
        icon={'/img/icons/camping.png'} 
        buttonText={'Pagar'} 
        title={currentPaymentInfo?.title}
        />
      <Card 
        hasButton={false} 
        icon={currentPaymentInfo?.icon} 
        buttonText={'Pagar'} 
        title={`Tesoureiro: ${currentPaymentInfo?.treasurer}\n${currentPaymentInfo?.formatedPhone}`} 
        additonalInformation={
          <div style={{width:'100%'}}>
            <Button 
              text='Iniciar conversa no WhatsApp' 
              bgColor='#44B564' 
              link={`https://wa.me/${currentPaymentInfo?.phone}`}
              />
            <CardInfo 
              title={'PIX'} 
              img={'/img/icons/qrcode.png'} 
              footer={currentPaymentInfo?.pix?.code} 
              text={`Nome: ${currentPaymentInfo?.pix?.name}\nValor: R$ ${currentPaymentInfo?.pix?.value}\nBanco: ${currentPaymentInfo?.pix?.bank}`}
              />
            <Button 
              text='Copiar código PIX' 
              ableToCopy={true} 
              textToCopy={currentPaymentInfo?.pix?.code}
              />
            <CardInfo 
              title={'Dados Bancários'} 
              hasImg={false}
              footer={''} 
              text={`Nome: ${currentPaymentInfo?.ted.name}\nDOC: ${currentPaymentInfo?.ted.document}\nNº Conta:${currentPaymentInfo?.ted.accountNumber}\nAgência:${currentPaymentInfo?.ted.agency}\nTipo: ${currentPaymentInfo?.ted.typeAccount}`}
              />
            <Button 
              text='Enviar comprovante de depósito'
              link={`https://wa.me/${currentPaymentInfo?.phone}`}
              />
          </div>}
        />
    
    </div>
  )
}

export function getServerSideProps(ctx) {
  const { params } = ctx;
  const { id } = params;
  const AllpaymentsInfo = process.env.PAYMENTS_INFO ? JSON.parse(process.env.PAYMENTS_INFO) : null
  const currentPaymentInfo =  AllpaymentsInfo?.filter(val => val.id == id)[0] || null
  return {
    props: {
      key: id,
      id,
      currentPaymentInfo
    }, 
  };
}


export default PaymentInfo