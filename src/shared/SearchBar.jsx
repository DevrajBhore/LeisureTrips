
import '../styles/searchbar.css';
import { Form, FormGroup, Input } from 'reactstrap';

const SearchBar = () => {
    
    return (
        <div className="search__bar">
            <Form className="d-flex align-items-center gap-4" >

                <FormGroup className="d-flex gap-3 form__group">
                    <span><i className="ri-map-pin-line"></i></span>
                    <div>
                        <h6>Location</h6>
                        <Input type="text" placeholder="Enter Location" />
                    </div>
                </FormGroup>
                <FormGroup className="d-flex gap-3 form__group">
                    <span><i className="ri-group-line"></i></span>
                    <div>
                        <h6>Max People</h6>
                        <Input type="number" placeholder="0"  />
                    </div>
                </FormGroup>

                <span className="search__icon" >
                    <i className="ri-search-line"></i>
                </span>
            </Form>
        </div>
    );
};

export default SearchBar;
