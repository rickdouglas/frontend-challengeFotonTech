import {useBook} from '../hooks/useBook';
import _ from 'lodash';

import {Card} from './Card';

export function CardList(){
  const {booksData} = useBook();
  return(

    <div className="row row-cols-1 row-cols-md-3 g-4">
    
      {booksData.map((book) => {
        return(
          <Card
          key={book.id}
          avatar={book.volumeInfo.imageLinks?.thumbnail}
          title={book.volumeInfo.title}
          description={book.volumeInfo.description} />

        )
      })}
    </div>

  );
}
