# Machine Wizard

The goal of this tool is to provide a list of machines that fit the user's described needs.

User needs are mapped using questions regarding their experience, interest, and consumption needs.

## Machine Types
As I do not have any experience with super automatic machines, I don't provide any recommendations here. I may add them in the future after 
I'll do my research.

### Semi-Automatic
Electric espresso machines that do not involve a manual operation to brew coffee, but aren't pre-programmed and require care and attention
of puck preparation, brewing (often) time, and steaming. Most machines fit here. Those that do not, are manual machines or superautomaticas.

### Manual Lever
Those split between spring assisted and not assisted. Those without a spring require a fully manual brew operation. The user is in charge of the 
applied pressure throughout the brew process, as opposed to the spring being responsible for the declining pressure profile of spring-assisted lever machines.

## Guiding Questions

Budget, Machine Type, Daily overall consumption, Drinks each time.

The consumption habits can teach us whether the user needs a consistent temperature shot over shot, strong and consistent steaming power, etc. 

How to model those questions conveniently?

**Budget**:
```javascript
    budget: {
        low: [1, 500],
        mid: [501, 1250],
        high: [1251, 2250],
        lux: [2251, 20000],
    },
```



Maybe I should just treat this as a questionnaire. Generic format for questions and some coding system to evaluate them.
Or, maybe each question should contain the type of question it is. For example, a range selection,
or a text. So that a budget question could be a range selection question.

```javascript
    const questions = [
        budget: {
            1: "",
            2: "",
            3: "",
        }
    ]

## THE BASIS OF RECOMMENDATIONS

What should we base our recommendations on?
1. Budget - can we model it by levels? 1-3 YES
2. Favorite Drink - can we model it by levels? 1-3 YES
3. Daily consumption / habits - can we model it by levels? 1-3  YES
4. Style of operation / machine type. - can we model it by levels? 1-3  YES
