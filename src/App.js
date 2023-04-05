


function App() {
  return (
   <div>
     <div>Hello React</div>
     <h2>react study</h2>
   <table border="1">
    <tr>
      <td>시간</td>
      <td>과목</td>
      <td>비고</td>
    </tr>
    <tr>
      <td>06:00~12:00</td>
      <td>html+CSS</td>
      <td rowSpan={2}>사정에 따라 일정은 변경될 수 있습니다.</td>
    </tr>
    <tr>
      <td>12:00~13:00</td>
      <td>점심시간</td>
    </tr>
   </table>
   </div>
  );
}

export default App;
