import Style from '../RegistrationForm.module.scss';
import { MdEmail } from 'react-icons/md';
import { AiFillLock } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';
export const initialInput = [
  {
    id: 1,
    title: 'E-mail',
    name: 'email',
    type: 'text',
    icon: <MdEmail className={Style.Icons} />,
  },
  {
    id: 2,
    title: 'Password',
    name: 'password',
    type: 'password',
    icon: <AiFillLock className={Style.Icons} />,
  },
  {
    id: 3,
    title: 'Confirm password',
    name: 'confirmPassword',
    type: 'password',
    icon: <AiFillLock className={Style.Icons} />,
  },
  {
    id: 4,
    title: 'First name',
    name: 'name',
    type: 'text',
    icon: <FaUser className={Style.Icons} />,
  },
];
