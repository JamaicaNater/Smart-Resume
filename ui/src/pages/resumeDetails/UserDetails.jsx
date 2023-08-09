import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import './Details.css'
import TagsDisplay from './TagsDisplay';
import DetailsDisplay from './DetailsDisplay';

const UserDetails = ({ user }) => {   
    return(
        <>
            <Typography variant='body1'>
            {
                user.phoneNumber && (
                <Typography>
                Phone: {user.phoneNumber}
                </Typography>
            )}
            {
                user.email && (
                <Typography>
                Email: {user.email}
                </Typography>
            )}
            </Typography>

            { 
                user.details &&
                <DetailsDisplay details={user.details} />
            }
            {
                user.skills && 
                <TagsDisplay skills={user.skills} ></TagsDisplay>
            }
        </>
    );
}

UserDetails.propTypes = {
    user: PropTypes.shape({
        firstName: PropTypes.string.isRequired, 
        lastName: PropTypes.string.isRequired,
        phoneNumber: PropTypes.string,
        email: PropTypes.string,
        details: PropTypes.arrayOf(PropTypes.string),
        skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
};
  

export default UserDetails;