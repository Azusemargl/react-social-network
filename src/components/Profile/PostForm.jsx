import { Field, reduxForm } from 'redux-form';
import { required } from '../../utils/validator/validator';
import { FiledCreator } from '../common/Forms/FormCreator';
import Button from '../common/Buttons/Button';

const Textarea = FiledCreator("textarea");

// Form Component
const PostForm = (props) => {

   return (
      <form onSubmit={props.handleSubmit}>
         <Field
            component={Textarea}
            validate={[required]}
            name="post"
            placeholder="Напишите что-нибудь"
         />
         <Button>Отправить</Button>
      </form>
   )
}

// Redux form
const PostReduxForm = reduxForm({form: 'postgForm'})(PostForm);

export default PostReduxForm;
