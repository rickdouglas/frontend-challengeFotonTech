import _ from 'lodash';

type Card={
  avatar:string,
  title:string,
  description:string,
}

export function Card(props:Card){
  const defaultImg = () =>{
    return (
      <svg className="bd-placeholder-img img-thumbnail"
           width="200" 
           height="200" 
           xmlns="http://www.w3.org/2000/svg" 
           role="img" 
           aria-label="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera: 200x200" 
           preserveAspectRatio="xMidYMid slice" 
           focusable="false">
            <rect width="100%" height="100%" fill="#868e96"></rect>
      </svg>

    );
  }
  return(
    <div className="col">
      <div className="card" style={{width:"24rem"}} >        
        <img src={props.avatar} className="img-thumbnail" alt="Capa do Livro" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text text-truncate">{props.description}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
    </div>
  );
}