import React, { Component } from 'react'
import styled from 'styled-components';
import Input from '../atom/Input';
import CustomButton from '../atom/Button';


const InputFieldContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

const InstructionText = styled.div`
  width: 80%;
  height: auto;
  margin: 1.5em auto;
  font-size: 1.1em;
  line-height: 2em;
  color: #455A64;
  text-align: justify;
`

const NewStoryContainer = styled.div`
  width: 80%;
  height: auto;
  margin: 1.5em auto;
  font-size: 1.1em;
  line-height: 2em;
  color: #455A64;
  text-align: justify;
`

const ButtonGroup = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  justify-content: space-around;
  margin: 2em auto;
`


class CreateStoryTab extends Component {

  state = {
    name: '',
    gender: '',
    age: '',
    color: '',
    city: '',
    animal: '',
    tvShow: '',
    furniture: '',
    hobby: '',
    beverage: '',
    story: '',
    hasNewStory: false
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
    console.log(name, event.target.value)
  }

  handleWriteStory = () => {
    this.setState({
      hasNewStory : true
    })
  }

  handleEraseStory = () => {
    this.setState({
      hasNewStory : false
    })
  }

  render() {
    const { name, gender, age, color, city, animal, tvShow, furniture, hobby, beverage, hasNewStory } = this.state
    return (
      <div>
        <InstructionText>
          Fill-in each of the following empty fields using your own personal data and then click on "Write Story."
        </InstructionText>
        <InputFieldContainer>
          <div className="left">
            <Input label="Name" value={name} onChange={this.handleChange('name')} />
            <Input label="Male or Female" value={gender} onChange={this.handleChange('gender')} />
            <Input label="Age" value={age} onChange={this.handleChange('age')} />
            <Input label="Color" value={color} onChange={this.handleChange('color')} />
            <Input label="City" value={city} onChange={this.handleChange('city')} />
          </div>
          <div className="right">
            <Input label="Animal" value={animal} onChange={this.handleChange('animal')} />
            <Input label="TV Show" value={tvShow} onChange={this.handleChange('tvShow')} />
            <Input label="Furniture" value={furniture} onChange={this.handleChange('furniture')} />
            <Input label="Hobby" value={hobby} onChange={this.handleChange('hobby')} />
            <Input label="Baverage" value={beverage} onChange={this.handleChange('beverage')} />
          </div>
        </InputFieldContainer>
        <div>

          <ButtonGroup>
            <CustomButton onClick={() => this.handleWriteStory()}>Write Story</CustomButton>
            <CustomButton onClick={() => this.handleEraseStory()}>Erase Story</CustomButton>
          </ButtonGroup>


          <NewStoryContainer>
            {hasNewStory ? ( `Once upon a time there was a young ${ gender === "Male" ? 'boy' : 'girl' } named ${ name }.  ${ name } was ${ age } years old and lived in ${ city }.  While walking home from school one day, a ${ color }  ${ animal } jumped out from behind a tree and tackled ${ name } to the ground.  But just when ${ gender === "Male" ? 'he' : 'she' }  was about to let out a scream for help, ${ name } realized that the ${ color }  ${ animal } was only licking ${ gender === "Male" ? 'his' : 'her' } face, not trying to bite it off.  At that moment, ${ name } decided to keep the ${ color }  ${ animal } as a pet.  When ${ name } and ${ gender === "Male" ? 'his' : 'her' } new pet finally got home, guess who was standing on the front porch?  That's right, it was ${ name }'s mother.

''What in world is that?'' shouted ${ name }'s mother.  ''It's a ${ color }  ${ animal },'' answered ${ name }.  ''Dah, I can see that, but what on earth is it doing here?'' said ${ name }'s mother.  ''It's my new pet!'' answered ${ name }.  ''Oh you think so do you?'' remarked ${ name }'s mother.  ''I wouldn't get your hopes up. You know how your father hates ${ animal }.  But, well, I suppose you can keep him until your father comes home.  And with that  ${ name } grabbed ${ animal } by the scruff of the neck and led ${ gender === "Male" ? 'his' : 'her' } new pet into the house--even though she knew ${ gender === "Male" ? 'his' : 'her' } father was probably going to dissaprove.

Once in the house,  ${ name } and the ${ animal } played and played, that is until ${ name }''s favorite television show, ''${ tvShow },'' started.  At that point ${ name }' forgot all about the ${ animal } having an unsupervised run of the house.  That is until half way through ''${tvShow},'' when ${ name } was brought back to reality when ${ gender === "Male" ? 'he' : 'she' } heard ${ gender === "Male" ? 'his' : 'her' } father shout, '' ${ name }! Get your pet in your...NOW!!''  With that ${ name } rushed into the room to see what all the fuss was about.  When she entered the room, there stood her father pointing toward the ${ furniture }.  ''Will someone please explain that?'' asked ${ gender === "Male" ? 'his' : 'her' }  father.  Then, as  ${ name } followed ${ gender === "Male" ? 'his' : 'her' } father's finger to where it was pointing,  ${ gender === "Male" ? 'he' : 'she' } instantly knew what ${ gender === "Male" ? 'his' : 'her' }  father was so upset about.  There, smack dab in the middle of the  ${ furniture }, was the biggest pile of  ${ animal } doo-doo ${ gender === "Male" ? 'he' : 'she' } had ever seen!  ''I don't EVEN want to know how that got there,'' said the father.  ''But you had better get it cleaned up now!  And you had better get rid of whatever it is that could have done such a thing!''  Well, knowing ${ gender === "Male" ? 'his' : 'her' } father as well as ${ gender === "Male" ? 'he' : 'she' } did, ${ name } knew there was no sense even asking ${ gender === "Male" ? 'his' : 'her' } father if  ${ gender === "Male" ? 'he' : 'she' } could keep the ${ animal } for a pet.  So without hesitation, ${ name } set out to find where ${ animal } was hiding.  After a few minutes of looking, ${ name } discovered ${ animal } crouched beneath the table that ${ name } did ${ gender === "Male" ? 'his' : 'her' }  ${ hobby } on.
''Come on, it's time to find you a new home.  And hey, don't look at me that way, I'm not the one who did the dirty deed on the ${ furniture }!'' scolded ${ name }.  ''Thanks to you I'll never get to have my own pet!!  And with that ${ name } led the ${ animal } out of the house and down to the local store.  They had a pet section and ${ name } knew the owner would find the ${ animal } a good home.  So after saying good-bye to the ${ animal } , and thanking the owner of the store, ${ name } walked backed home and attempted to dround ${ gender === "Male" ? 'his' : 'her' } sorrows by slamming down a half dozen ${ beverage }s.  But ${ name }'s pitty party came to an abrupt end when ${ gender === "Male" ? 'his' : 'her' }  father reminded ${ gender === "Male" ? 'his' : 'her' }  about the mess ${ gender === "Male" ? 'he' : 'she' } had neglected to clean up.  And low and behold, midway through the clean-up, ${ name } suddenly became thankful that someone else was going to have to do it from now on.
`) : null}
          </NewStoryContainer>
        </div>



      </div>
    )
  }
}

export default CreateStoryTab