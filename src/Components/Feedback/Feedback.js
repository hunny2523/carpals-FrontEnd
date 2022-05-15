import {useState} from 'react';
import './feedback.css'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const StarRating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    return (
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= (hover || rating) ? "on" : "off"}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className="star display-4">&#9733;</span>
            </button>
          );
        })}
      </div>
    );
  };
export default function Feedback() {
  return (
    <div>
        <h1>Give Feedback</h1>
      <Form>
        <FormGroup>
          <Label for="exampleSelect">Ratings</Label>
         <StarRating/>
         
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Comment</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <Button color="danger">Submit</Button>
      </Form>
    </div>
  )
}
