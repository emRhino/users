import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from "./Skeleton";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";

function AlbumsList({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  const [doAddAlbum, isAddingAlbum, addingAlbumError] = useAddAlbumMutation();

  // console.log(data, error, isLoading);

  let content;
  if (isLoading) {
    content = <Skeleton times={6} className="h-10 w-full" />;
  } else if (error) {
    content = <div>Error fetching data...</div>;
  } else {
    content = data.map((album) => {
      const header = album.title;

      return (
        <ExpandablePanel key={album.id} title={album.title}>
          {header}
        </ExpandablePanel>
      );
    });
  }

  const handleAddAlbum = () => {
    doAddAlbum(user);
  };

  return (
    <div>
      <div>Albums for {user.name}</div>
      <Button onClick={handleAddAlbum}>Add Album</Button>
      <div>{content}</div>
    </div>
  );
}

export default AlbumsList;
