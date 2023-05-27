import { useNavigate } from "react-router-dom";
export default function SearchProduct(props) {
    const Navigate = useNavigate();
    const {handleSearch} = props;

    const onChange = (e) => {
       if(e.target.value !== ""){
        handleSearch(e.target.value)
        Navigate("/home")
       }
    };

  return (
    <div className="form-outline">
      <input
        type="search"
        id="form1"
        className="form-control"
        placeholder="Type query"
        aria-label="Search"
        onChange={onChange}
      />
    </div>
  );
}
