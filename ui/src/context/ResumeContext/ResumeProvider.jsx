import { useState } from 'react';
import ResumeContext from './ResumeContext';
import PropTypes from 'prop-types';
import useResume from '../../hooks/useResume';

const initialState = {
    tagFilters: [],
    mustConatainAllTags: true,
};

const ResumeProvider = ({ children }) => {
    const [tagFilterData, setTagFilterData] = useState(initialState);
    const { 
            user,
            projects,
            education,
            experience,
            references,
            tags,
            jobs,
        } = useResume();

    return (
        <ResumeContext.Provider 
        value={{ 
                tagFilterData, 
                setTagFilterData,
                user,
                projects,
                education,
                experience,
                references,
                tags,
                jobs,
        }}>
            {children}
        </ResumeContext.Provider>
    );
};

ResumeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ResumeProvider;
