const Team = () => {
  const teamMembers = [
    {
      name: 'John Smith',
      position: 'Designation here',
      image: 'https://i.pinimg.com/736x/dc/22/55/dc225587b5e11e930bac100e99dc6ba3.jpg',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates impedit perspiciatis quae mollitia consectetur corporis fuga obcaecati facere cupiditate.',
    },
    {
      name: 'Elina Williams',
      position: 'Designation here',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-rBcrlPer_lEILM_97iTBEhfoeFFY01zCkXlKgHvR7ZZzly5PEjVefWY&s',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates impedit perspiciatis quae mollitia consectetur corporis fuga obcaecati facere cupiditate.',
    },
    {
      name: 'John Smith',
      position: 'Designation here',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvHwr3z4nc7-AFwPzUGU3tC_IKsrNzvb3PnsS9x-qvWCHHdGy3QWFvPiU&s',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates impedit perspiciatis quae mollitia consectetur corporis fuga obcaecati facere cupiditate.',
    },
  ];

  return (
    <div>
      <p className="text-gray-600 mb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates impedit perspiciatis quae mollitia consectetur.
      </p>
      <div className="space-y-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-blue-50 rounded-lg p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="text-center md:w-48">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-lg mx-auto mb-2 object-cover"
                />
                <h4 className="font-semibold">{member.name}</h4>
                <p className="text-sm text-gray-500">{member.position}</p>
              </div>
              <p className="text-gray-600 flex-grow">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
