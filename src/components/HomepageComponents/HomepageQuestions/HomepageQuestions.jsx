import { QuestionsWrapper, QuestionsList, QuestionsListItem, QuestionText } from "components/HomepageComponents/HomepageQuestions/HomepageQuestions.styled"

export const HomePageQuestions = () => {



    return (
        <QuestionsWrapper>
            <span style={{fontSize: "8", fontWeight: "600" }}>Faq</span>
            <h2>Frequent Questions</h2>
            <QuestionsList className="questions-list">
                <QuestionsListItem className="questions-list-item">
                    <QuestionText>Imperdiet et nunc, ipsum laoreet iaculis aliquet?</QuestionText>
                    <span>+</span>
                </QuestionsListItem>
                
                <QuestionsListItem className="questions-list-item">
                    <QuestionText>Mi fringilla sit felis tristique varius tempus?</QuestionText>
                    <span>+</span>
                </QuestionsListItem>

                <QuestionsListItem className="questions-list-item">
                    <QuestionText>Faucibus nec dictum pellentesque arcu ultrices ultricies?</QuestionText>
                    <span>+</span>
                </QuestionsListItem>

                <QuestionsListItem className="questions-list-item">
                    <QuestionText>Morbi eget tristique porttitor turpis placerat tristique?</QuestionText>
                    <span>+</span>
                </QuestionsListItem>

                <QuestionsListItem className="questions-list-item">
                    <QuestionText>Dolor turpis at turpis senectus convallis nunc pellentesque?</QuestionText>
                    <span>+</span> 
                </QuestionsListItem>
            </QuestionsList>
        </QuestionsWrapper>
    )
}