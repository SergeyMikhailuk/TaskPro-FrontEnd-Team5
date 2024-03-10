import axios from 'axios';

export const deleteBoard = async (boardId, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    await axios.delete(`/api/boards/${boardId}`, config);
    console.log('Board deleted successfully');
    return { success: true };
  } catch (error) {
    console.error('Error deleting board:', error);
    return { success: false, error };
  }
};
