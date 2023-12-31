import { CircularProgress, IconButton } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import { useMutation, useQueryClient } from "react-query";
import { PropTypes } from 'prop-types';

const DeleteResumeData = ({queryKey, apiCall}) => {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({ 
    queryKey: queryKey,
    mutationFn: apiCall,
  });

  const deleteData = async () => {
    mutate(null, {
      onSuccess: () => {
        queryClient.invalidateQueries(queryKey)
      },
    })
  };

  return (
    <IconButton onClick={deleteData}>
      {
        isLoading && <CircularProgress size="1rem"/> ||
        <DeleteIcon sx={{fontSize: '1rem'}} />
      }
    </IconButton>
  )
}

DeleteResumeData.propTypes = {
  queryKey: PropTypes.array.isRequired,
  apiCall: PropTypes.func.isRequired,
}

export default DeleteResumeData;