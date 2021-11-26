export const PopupInfo = (props) => {
  return (
    <div>
        <div className="text-center text-xl font-semibold">Rooms</div>
      <table className="table-auto w-full">
        <tbody>
          <tr>
            <th className="font-bold">Kitchens</th>
            <td>{props.rooms.kitchen}</td>
          </tr>
          <tr>
            <th className="font-bold">Living Rooms</th>
            <td>{props.rooms.livingRoom}</td>
          </tr>
          <tr>
            <th className="font-bold">Grages</th>
            <td>{props.rooms.grage}</td>
          </tr>
          <tr>
            <th className="font-bold">Bed Rooms</th>
            <td>{props.rooms.bedRoom}</td>
          </tr>
          <tr>
            <th className="font-bold">Bath Rooms</th>
            <td>{props.rooms.bathRoom}</td>
          </tr>
          <tr>
            <th className="font-bold">Floors</th>
            <td>{props.floors}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
