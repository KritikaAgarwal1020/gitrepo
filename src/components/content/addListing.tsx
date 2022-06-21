//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import $ from 'jquery';
import Popper from 'popper.js';

//import 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css';

// <link href="" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
// <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>

function AddListing() {
  return (
    <>
      <p className='listing'> Create Listing</p>
      <div className="listing-form container-sm"> 
        <div>
          <form>
          <div className="listing-form-input container" > 
              <div id ="photo_video" className="listing-form-label-input row align-items-start">

                <div className="col-4">
                <label  className="form-label">
                PHOTOS & VIDEO
                </label>
                  <p className="description_label">
                Add up to 16 photos and 1 video to show the angles and details of your item.</p></div>
               <div className="col-8">
                <div data-et-name="add_photo_video" data-et-element-type="button" className="btn btn-secondary">
                <div className="photo">
                <i className="upload-icon"></i>
                <div className="tc--white">ADD PHOTOS &amp; VIDEO
                </div>
                </div>
                </div>
                </div>
              </div>
              </div>

              <div className="listing-form-input container"> 
              <div id ="title" className="listing-form-label-input row align-items-start">
               <div className="col-4">
                <label>
                  TITLE
                </label>
                <div><p className="description_label">
                Share key details like Brand, Size, and Color.</p></div>
                </div>
                <div className="col-8">
                <input id="text_input_edit" className ="text_input form-control" placeholder="What are you selling? (required)"  type="text" ></input>  
                </div>
              </div>

              <div id ="description" className="listing-form-label-input row align-items-start">
                <div className="col-4">
                <label>
                  DESCRIPTION
                </label>
                <div><p className="description_label">
                Tell shoppers about your listing by describing the Brand, Size, Color, Condition, Material, and any other noteworthy details.</p></div>
                </div>
                <div className="col-8" >
                <textarea id="text_input_edit" className ="text_input form-control" placeholder="Describe it! (required)"  ></textarea>  
                </div>
              </div>
              </div>

              <div className="listing-form-input container"> 
              <div id ="category" className="listing-form-label-input row align-items-start">
                <div className="col-4">
                <label>
                  CATEGORY *
                </label>
                <div><p className="description_label">
                Add details to help your buyers find your item quickly.</p></div>
                </div>
                
                <div className="dropdown col-4">
                <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                All Categories
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li><button className="dropdown-item" type="button">Women</button></li>
                <li><button className="dropdown-item" type="button">Men</button></li>
                <li><button className="dropdown-item" type="button">Kids</button></li>
                <li><button className="dropdown-item" type="button">Home</button></li>
                <li><button className="dropdown-item" type="button">Electronics</button></li>
                <li><button className="dropdown-item" type="button">Pets</button></li>
                </ul>
                </div>

                <div className="dropdown col-4">
                <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                Select Subcategory (optional)
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li><button className="dropdown-item" type="button">Women</button></li>
                <li><button className="dropdown-item" type="button">Men</button></li>
                <li><button className="dropdown-item" type="button">Kids</button></li>
                <li><button className="dropdown-item" type="button">Home</button></li>
                <li><button className="dropdown-item" type="button">Electronics</button></li>
                <li><button className="dropdown-item" type="button">Pets</button></li>
                </ul>
                </div>
              </div>
              </div>

              <div className="listing-form-input container"> 
              <div id ="quantity" className="listing-form-label-input row align-items-start">
                <div className="col-4">
                <label>
                  QUANTITY
                </label>
                <div><p className="description_label">
                Select a single or multi item.</p></div>
                </div>
                <div className="col-4 d-grid gap-4 d-md-block">

                <button id="quantity_button single" className ="quantity_button btn btn-secondary">Single Item</button> 
                
                <button id="quantity_button multi" className ="quantity_button btn btn-secondary">Multi Item</button>  
                </div>
                <div className="col-4">
                <p className="description_label">
    If you have more than one of the same item for sale, select Multi Item to specify the quantity. </p>
                </div>
              </div>

              <div id ="size" className="listing-form-label-input row align-items-start">
              <div className="col-4">
                <label>
                  SIZE
                </label>
                </div>

                <div className="dropdown col-8">
                <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                Select Size
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li><button className="dropdown-item" type="button">US</button></li>
                <li><button className="dropdown-item" type="button">UK</button></li>
                <li><button className="dropdown-item" type="button">EU</button></li>
                </ul>
                </div>    
              </div>
              </div>

              <div className="listing-form-input container"> 
              <div id ="tags" className="listing-form-label-input row align-items-start">
                <div className="col-4">
                <label>
                  NEW WITH TAGS
                </label>
                <div><p className="label_optional">
               Optional</p></div>
               </div>
                <div className="row col-8" >
                  <div>
                  <p className="input_label">Does this item have tags attached?
                  </p></div>
                <div className="col-sm-3">
                <button id="quantity_button single" className ="quantity_button btn btn-secondary" name="tag_yes" value="tag_yes">Yes</button> 
                <button id="quantity_button multi" className ="quantity_button btn btn-secondary" name="tag_no" value="tag_no">No</button> 
                </div> 
                <div className="col-sm-5">
                <p className="description_label">
                An item is New With Tags (NWT) if its brand-new, unused, and has all of its original tags attached. For more information, please visit Poshmark's <a  className="link_path">NWT Policy</a>.</p> 
               </div>
                </div>
              </div>
            </div>

            <div className="listing-form-input container"> 
              <div id ="brand" className="listing-form-label-input row align-items-start">
              <div className="col-4">
                <label>
                  BRAND
                </label>
                <div><p className="description_label">
                Add details to help your buyers find your item quickly.</p></div>
                </div>
                <div className="row col-8">
                  <div className="col-lg-7">
                <input id="text_input_edit" className ="text_input form-control" placeholder="Enter the Brand/Designer"  type="text" ></input>  
                </div>
                <div className="col-sm-1">
                <p className="description_label">
                Optional</p> 
                </div>
                </div>
              </div>
              </div>

              <div className="listing-form-input container"> 
              <div id ="brand" className="listing-form-label-input row align-items-start">
              <div className="col-4">
                <label>
                  COLOR
                </label>
                <div><p className="description_label">
                Select up to 2 colors.</p></div>
                </div>
                <div className="dropdown row col-8">
                <div className="col-lg-7">
                <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                Select up to 2 colors.
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li><button className="dropdown-item" type="button">Red</button></li>
                <li><button className="dropdown-item" type="button">Pink</button></li>
                <li><button className="dropdown-item" type="button">Orange</button></li>
                <li><button className="dropdown-item" type="button">Yellow</button></li>
                <li><button className="dropdown-item" type="button">Green</button></li>
                <li><button className="dropdown-item" type="button">Bluw</button></li>
                <li><button className="dropdown-item" type="button">Purple</button></li>
                <li><button className="dropdown-item" type="button">Gold</button></li>
                <li><button className="dropdown-item" type="button">Silver</button></li>
                <li><button className="dropdown-item" type="button">Black</button></li>
                <li><button className="dropdown-item" type="button">Gray</button></li>
                <li><button className="dropdown-item" type="button">White</button></li>
                <li><button className="dropdown-item" type="button">Cream</button></li>
                <li><button className="dropdown-item" type="button">Brown</button></li>
                <li><button className="dropdown-item" type="button">Tan</button></li>
                </ul>
                </div>
                <div className="col-sm-1">
                <p className="description_label">
                Optional</p> 
                </div>
                </div>
              </div>
              </div>

              <div className="listing-form-input container"> 
              <div id ="style_tags" className="listing-form-label-input row align-items-start">
              <div className="col-4">  
                <label>
                  STYLE TAGS
                </label>
                <div><p className="description_label">
                Make it easy for buyers to find your listings by selecting or creating up to 3 tags to describe your item (aesthetic, material, style, etc.)</p></div>
                </div>
                <div className="row col-8">
                 <div className="col-lg-7"> 
                <input id="text_input_edit" className ="text_input form-control" placeholder="Add up to 3 tags"  type="text" ></input>  
                </div>
                <div className="col-sm-1">
                <p className="description_label">
                Optional</p> 
                </div>
                </div>
              </div>
              </div>

              <div className="listing-form-input container"> 
              <div id ="brand" className="listing-form-label-input row align-items-start">
              <div className="col-4">    
                <label>
                  PRICE *
                </label>
                <div><p className="description_label">
                View Poshmark’s <a>seller fee policy</a></p></div>
                </div>
                <div className="row col-4">  
                <div className ="align-self-start">
                 <p className="input_label">Original Price</p> 
                 <input id="text_input_edit" className ="text_input form-control" placeholder="* Required"  type="number" ></input>  
                </div>
                <div className="row align-self-start">
                 <p className="input_label">Listing Price</p> 
                 <input id="text_input_edit" className ="text_input form-control" placeholder="* Required"  type="number" ></input>  
                 <p className="description_label">
                Suggested Price: Title, category, and original price required.</p>
                </div>
                <div className="align-self-start">
                <p className="input_label">Discounted shipping</p>   
                <input id="text_input_edit" className ="text_input form-control" placeholder="* Required"  type="number" ></input>  
                </div>
                </div>
                <div>
   
                </div>

              </div>
              </div>

              <div className="listing-form-input container"> 
              <div id ="style_tags" className="listing-form-label-input row align-items-start">
              <div className="col-4">  
                <label>
                  AVAILABILITY *
                </label>

                <div><p className="description_label">
                  Questions? </p>
                  <a>Learn More</a> 
                  </div>
                 </div> 
                 <div className="row col-8">
                  <div className="dropdown col-md-8">
                <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                Select Size
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li><button className="dropdown-item" type="button">For Sale </button></li>
                <li><button className="dropdown-item" type="button">Not for Sale</button></li>
                <li><button className="dropdown-item" type="button">Drops</button></li>
                </ul>
                </div> 

                <div className="col-sm-1">
                <p className="description_label">
                Optional</p> 
                </div>
                </div>
              </div>
              </div>


            <div className="listing-form-label-input container">
              <div className="row align-items-start">
              <div className="col-4">
              <label>
                ADDITIONAL DETAILS
              </label>
              </div>
              <div className="col-8">
                <textarea className="form-control"></textarea>
              </div>
            </div>
            </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default AddListing;
