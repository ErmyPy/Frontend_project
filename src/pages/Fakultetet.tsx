import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";

type Faculty = {
  id: number;
  name: string;
  teachers: Teacher[];
};

type Teacher = {
  id: number;
  name: string;
  email: string;
  image: string;
  subject: string;
  facultyId: number;
};

export function Fakultetet() {
  const [faculties, setFaculties] = useState<Faculty[]>([]);

  useEffect(() => {
    fetch("http://localhost:2222/faculties")
      .then((resp) => resp.json())
      .then((faculties) => setFaculties(faculties));
  }, []);

  return (
    <div>
      <Header />
      <ul>
        {faculties.map((faculty) => (
          <>
            <li>
              <Link to={`/fakulteti/${faculty.id}`} key={faculty.id}>
                {faculty.name}
              </Link>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}
