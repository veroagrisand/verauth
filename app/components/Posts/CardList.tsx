import { Card } from '@nextui-org/react';

interface CardListProps {
     children: React.ReactNode;
}

const CardList: React.FC<CardListProps> = ({ children }) => {
     return (
          <>
               <Card className="">
                    {children}
               </Card >
          </>
     );
};

export default CardList;