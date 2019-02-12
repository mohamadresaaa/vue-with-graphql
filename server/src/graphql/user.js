const getCurrentUser = async (_, args, { User, currentUserId }) => {
    return await User.findById(currentUserId);
};

module.exports = { 
    getCurrentUser
};