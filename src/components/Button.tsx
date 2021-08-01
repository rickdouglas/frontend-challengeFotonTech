import {ButtonHTMLAttributes} from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> 
/**Button Props
 * Como o botao é um componente generico e que vai ser usado mais de uma vez na app
 * Cria-se um componente Button passando para ele todas as propriedades que um componente
 * <button> html pode receber.
 */

 export function Button(props : ButtonProps){

  return (
    <button className='login-google' {...props} /> // operador spread que atribui todas as propriedades recebidas como parametro para o componente

  )
}