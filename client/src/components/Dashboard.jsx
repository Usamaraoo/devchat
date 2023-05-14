import { Link} from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h3 className="text-2xl">Dashboard</h3>
      <Link className="underline text-blue-500" to='/'>Home</Link>
    
    </div>
  );
}
