import { InjectedFormProps, reduxForm } from 'redux-form'
import { createField, Textarea } from '../common/Forms/FormCreator'
import Button from '../common/Buttons/Button'
import { PostsForm  } from '../../types/profile-type'

// Form Component
const PostForm: React.FC<InjectedFormProps<PostsForm>> = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         {createField('field textarea', 'Напишите что-нибудь', 'post', [], Textarea )}
         <Button>Отправить</Button>
      </form>
   )
}

// Redux form
const PostReduxForm = reduxForm<PostsForm>({form: 'postgForm'})(PostForm)

export default PostReduxForm
