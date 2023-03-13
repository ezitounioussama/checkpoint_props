import Profile from "./profile/Profile";
import "./App.css";
import image from "./profile/photo_2023-03-02_23-14-15.jpg";
function App() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Profile
        profession="Student"
        fullName="Oussama Ezitouni"
        bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit officia omnis cupiditate rem iusto voluptate rerum eum minima voluptas saepe neque, incidunt magnam hic, animi debitis nostrum, fugiat at? Voluptatum?"
      >
        {image}
      </Profile>
    </div>
  );
}

export default App;
