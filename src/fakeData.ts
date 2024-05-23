export interface UserStoryProp {
    id: number;
    name: string;
    desc: string;
    progress: number;
  }
  
  export interface EpicStoryProp {
    id: number;
    name: string;
    desc: string;
    progress: number;
    userStoryArray: UserStoryProp[];
  }
  
  export const fakeData: EpicStoryProp[] = [
    {
      id: 1,
      name: 'ChatGPT vs Bedrock',
      desc: 'Comparison between ChatGPT and Bedrock',
      progress: 0,
      userStoryArray: [
        {
          id: 1,
          name: 'User can compare models',
          desc: 'Allow users to compare different AI models',
          progress: 90,
        },
        {
          id: 2,
          name: 'User can view model details',
          desc: 'Provide detailed information about AI models',
          progress: 80,
        },
      ],
    },
    {
      id: 2,
      name: 'Project Alpha',
      desc: 'Description of Project Alpha',
      progress: 70,
      userStoryArray: [
        {
          id: 3,
          name: 'User can view project details',
          desc: 'Provide information about Project Alpha',
          progress: 60,
        },
        {
          id: 4,
          name: 'User can submit feedback',
          desc: 'Allow users to provide feedback on Project Alpha',
          progress: 30,
        },
      ],
    },
  ];
  