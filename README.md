#  Online Calculator Project

This project is a fully functional web calculator application built using **Vanilla JavaScript, HTML5, and CSS3**. It is a strong showcase of fundamental front-end development skills, emphasizing logic, state management, and modern CSS layout.

## Live Demo

**[https://calculator-ashen-rho.vercel.app/]**

##  Key Features

* **Core Arithmetic:** Supports Addition (`+`), Subtraction (`-`), Multiplication (`*`), and Division (`/`).
* **Sequential Operations:** Correctly handles chained calculations (e.g., pressing multiple operators consecutively: $5 + 3 \times$).
* **Input Controls:** Implements **Cancel (`C`)** and **Backspace (`←`)** functionality.
* **Decimal Handling:** Logic prevents multiple decimal points (`.`) in a single number.
* **Error Handling:** Features robust logic to detect and display an explicit **`Error`** message upon attempted division by zero.
* **Modern Layout:** Uses CSS Grid for an intuitive and responsive 4-column button layout.

##  Technologies Used

| Technology | Purpose |
| :--- | :--- |
| **Vanilla JavaScript** | Core application logic, event handling, and managing the calculator's state. |
| **HTML5** | Semantic structure and the use of `data-value` attributes for efficient button identification. |
| **CSS3** | Styling, **Flexbox** (for centering the application), and **CSS Grid** (for the precise button arrangement).

##  Technical Highlights

The application's complexity centers on managing the **state** of the calculation across multiple user clicks.

### State Variables:

The entire application relies on four key variables for state management: 

1.  `currentInput`: The string displayed on the screen (e.g., `'12.5'`).
2.  `previousValue`: The number stored as the first operand (e.g., the '5' in $5 +$).
3.  `operator`: The mathematical action pending execution (e.g., `'+'`, `'*'`).
4.  `awaitingNextInput`: A boolean flag that determines if the next digit should **replace** the current display (after an operator or equals) or **append** to it.

### Calculation Logic:

The `handleOperator()` and `calculate()` functions manage the operation sequence:

1.  When an operator is pressed, the function first checks if a calculation is **pending** (if `previousValue` and `operator` are already set).
2.  If pending, the `calculate()` function is called immediately to resolve the previous equation (e.g., $5 + 3 = 8$).
3.  The result (8) is stored in `previousValue`, and the new operator is saved, allowing continuous calculation chains.
4.  All number inputs and calculation results are converted between **String** (for display) and **Number** (for math) using `parseFloat()` and `.toString()` to maintain type safety.
