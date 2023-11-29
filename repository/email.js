import emailjs from '@emailjs/browser'
const SERVICE_ID = 'service_1aauhob'
const TEMPLATE_ID = 'template_ib6axjr'
export default{
    sendEmail(data) {
        var templateParams = {
            to_name: data.name,
            message: data.message,
            reply_to: data.reply_to
        };
        return new Promise((resolve, reject) => {
            emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, 'yFKgNr8c9qprMbPoR')
            .then(function(response) {
            //    console.log('SUCCESS!', response.status, response.text);
            resolve(true)
            }, function(error) {
            //    console.log('FAILED...', error);
            reject(new Error(error))
            });
        })
    
    }
}