import _ from 'lodash';

type Card={
  avatar:string,
  title:string,
  description:string,
}

export function Card(props:Card){

  return(
    <div className="col">
      <div className="card" style={{width:"24rem"}} >
        {/* {props.avatar === undefined ? <h3>Capa Indisponivel</h3>
        : <img src={props.avatar} className="img-thumbnail" alt="" /> } */}
        
        <img src={`${_.get(props, 'avatar')}`} className="img-thumbnail" alt="Capa do Livro" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text text-truncate">{props.description}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
    </div>
  );
}