export default function handlingBasicProjectInput(
  target,
  event,
  { setBasicInfoProject, basicProjectInfo }
) {
  event.persist();

  switch (target) {
    case "name":
      setBasicInfoProject({
        ...basicProjectInfo,
        title: event.target.value,
      });
      break;

    case "description":
      setBasicInfoProject({
        ...basicProjectInfo,
        description: event.target.value,
      });
      break;

    case "board":
      setBasicInfoProject({
        ...basicProjectInfo,
        board: event.target.value,
      });
      // trelloLists.variables({ boardId: basicProjectInfo.board });
      // .refetch({ boardId: basicProjectInfo.board });
      break;

    case "activeList":
      setBasicInfoProject({
        ...basicProjectInfo,
        activeList: event.target.value,
      });
      break;

    case "repo":
      setBasicInfoProject({
        ...basicProjectInfo,
        repo: event.target.value,
      });
      break;

    default:
      return "Unknown input";
  }
}
