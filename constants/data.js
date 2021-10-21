const userData = {
  name: "Nguyen Tran",
  designation: "Developer",
  email: "mailto:nguyen.ntran.98@gmail.com",
  projects: [
    {
      title: "QuidditchSim",
      link: "https://github.com/nn-tran/QuidditchSim",
      imgUrl: "https://raw.githubusercontent.com/nn-tran/QuidditchSim/master/demo.gif",
      description: "This is a Unity demo. Despite the name, it's more of a cats and mouse simulation. This was part of my studies related to swarm intelligence.",
    },
    {
      title: "battleship",
      link: "https://github.com/nn-tran/battleship",
      imgUrl: "https://raw.githubusercontent.com/nn-tran/battleship/master/screenshot.png",
      description: "A turn based game using Javafx, based on the pencil-and-paper game.",
    },
    {
      title: "chess",
      link: "https://github.com/nn-tran/chess",
      imgUrl: "https://raw.githubusercontent.com/nn-tran/chess/master/screenshot.png",
      description: "A chess board done in React.js. Clicking on a piece shows available legal moves for that piece. Threefold repetition is implemented using a modified Zobrist hashing function, using 2x32-bit seeds.",
    },
  ],

  bio: [  
    `I'm an aspiring full-stack developer. I enjoy writing software and solving puzzles.`,
  ],

  about: [
    {
      title: "Education",
      text: [
        `I just graduated from the University of Calgary with a BSc in Computer Science.`,
      ]
    },
    {
      title: "Notable Courses",
      text: [
        `Artificial Intelligence`,
        `Emergent Computing`,
        `Data Base Management Systems`,,
        `Principles of Operating Systems`,
        `Computer Networks`,
        `Principles of Computer Security`,
      ],
    },
    {
      title: "Skills",
      className:"flex flex-row flex-wrap text-black font-mono items-center -mx-2",
      subclassName: "rounded-md py-2 px-4 bg-yellow-500 m-2",
      text: [
        `Java`,
        `C++`,
        `C#`,
        `Python`,
        `Javascript`,
        `React`,
        `Tailwind CSS`,
        `Git`,
        `PostgreSQL`,
        `Unity`,
      ]
    },

  ],

  education: [

  ],

  skills: [
    
  ],
  resumeUrl:
    "",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/nguyen-tran-b5a3161bb/",
    github: "https://github.com/nn-tran",
    facebook: "https://facebook.com/eqoz1872",
  },
};

export default userData;
