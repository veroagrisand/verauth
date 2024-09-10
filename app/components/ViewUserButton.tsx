import Link from 'next/link';

interface ViewUserButtonProps {
     userId: number;
}

const ViewUserButton: React.FC<ViewUserButtonProps> = ({ userId }) => {
     return (
          <Link href={`/users/${userId}`}>
               <a>View User</a>
          </Link>
     );
};

export default ViewUserButton;