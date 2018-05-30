
var getProjects = function(){
    console.log('at getProjects');
    return {
        id : 1,
        name : 'Project Management Website',
        owner : 'Rajkamal'
    };
};

module.exports = {
    getProjects : getProjects
};
