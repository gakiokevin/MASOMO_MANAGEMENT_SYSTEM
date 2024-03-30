// import user from '../public/vite.svg'
const Main = ({active,children})=> {

 return (
   <div className={`main ${active}`}>
      {children}
      
   </div>
 )

}
export default Main
