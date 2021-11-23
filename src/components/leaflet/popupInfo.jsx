export const PopupInfo = (props) => {
  return (
    <div>
        <div className="text-center text-xl font-semibold">Rooms</div>
      <table className="table-auto">
        <tbody>
          <tr>
            <th className="font-semibold">Kitchens</th>
            <td>{props.rooms.kitchen}</td>
          </tr>
          <tr>
            <th className="font-semibold">Living Rooms</th>
            <td>{props.rooms.livingRoom}</td>
          </tr>
          <tr>
            <th className="font-semibold">Grages</th>
            <td>{props.rooms.grage}</td>
          </tr>
          <tr>
            <th className="font-semibold">Bed Rooms</th>
            <td>{props.rooms.bedRoom}</td>
          </tr>
          <tr>
            <th className="font-semibold">Bath Rooms</th>
            <td>{props.rooms.bathRoom}</td>
          </tr>
          <tr>
            <th className="font-semibold">Floors</th>
            <td>{props.floors}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
