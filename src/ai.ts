import { API } from "progettolib";

export async function createUserStoriesFromEpic(api: API, prompt: string, projectId: string, epicStoryId: string) {
    const response: any = await api.bedrock(prompt, 0);
    const { userStories } = JSON.parse(response.content[0].text.replace(/^.*```json/, '').replace(/```.*$/, ''));
    
    for (const user of userStories) {
        await api.addUserStrory({ tag: (Math.floor(Math.random() * 1000)).toString(), description: user.description }, projectId, epicStoryId);
      }
}

export async function createEpicStoriesFromBR(api: API, prompt: string, projectId: string) {
    const epics = JSON.parse((await api.bedrock(prompt, 1)).content[0].text.replace(/^.*```json/, '').replace(/```.*/, '')).epicStories
    for (const epic of epics) {
	const { id: epicId } = await api.addEpicStory({descrizione: epic.epicStory}, projectId) as any;
	await createUserStoriesFromEpic(api, epic.epicStory, projectId, epicId);
    }
}
