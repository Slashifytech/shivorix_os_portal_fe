export function CustomTableSeventeen({ tableHead = [], tableRows = [], icon, action}) {
  return (
    <>
      <Card className="h-full w-full overflow-scroll scrollbar-hide font-poppins">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {tableHead.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-input p-4 "
                >
                  <Typography
                    variant="small"
                    color="sidebar"
                    className="font-medium leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row, index) => (
              <tr key={index} className="even:bg-blue-gray-50/50">
                {/* Render only the values you want to display */}
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {row.sno}
                  </Typography>
                </td>

                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {row.data.companyName}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {row.data?.agentName}
                  </Typography>
                </td>
                
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {row.data?.emailId}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {row.data?.phoneNumber}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {row.data?.city}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {row.data?.state}
                  </Typography>
                </td>  <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {row.data?.country}
                  </Typography>
                </td>

            
              
               
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </>
  );
}
