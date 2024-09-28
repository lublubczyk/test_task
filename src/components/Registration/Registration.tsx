import {useState} from 'react' 
import { useForm, Controller } from 'react-hook-form';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import DatePicker from "react-datepicker";
import { useNavigate, useParams } from 'react-router-dom';

import { useAppDispatch } from '../../hooks';
import { eventsActions } from '../../redux';
import { IRegister } from '../../interfaces';
import "react-datepicker/dist/react-datepicker.css";
import style from './Registration.module.css';

const Registration = () => {

    const { register, handleSubmit, reset, control } = useForm<IRegister>();
    const {event_id} = useParams();
    const [startDate, setStartDate] = useState<Date | null>(new Date('2000-01-01'));
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const setNewUser = (info: IRegister) => {
        const { whoToldAboutAs, birthDate, fullName, email } = info;
        const userData = {
            fullName,
            email,
            birthDate: `${birthDate.getDay()}/${birthDate.getMonth()}/${birthDate.getFullYear()}`,
            whoToldAboutAs,
        };
        
        dispatch(eventsActions.addParticipant({ event_id: +event_id, participant: userData }));
        navigate(`/participants/${event_id}`)
        reset();
    }

    return (
        <div className={style.Registration}>
            Event registration
            <form className={style.Form} onSubmit={handleSubmit(setNewUser)}>
                <span>Full name</span>
                <input type='text' placeholder='Enter your name' {...register('fullName', { required: true })} />
                <span>Email</span>
                <input type='email' placeholder='Enter your email' {...register('email', { required: true })} />
                <span>Date of birth</span>
                <Controller
                    name="birthDate"
                    control={control}
                    defaultValue={startDate}
                    render={({ field }) => (
                        <DatePicker
                            selected={field.value}
                            onChange={(date: Date) => {
                                setStartDate(date);
                                field.onChange(date);
                            }}
                            dateFormat="dd/MM/yyyy"
                        />
                    )}
                />
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Where did you hear about this event?</FormLabel>
                    <Controller
                        name="whoToldAboutAs"
                        control={control}
                        defaultValue="Friends"
                        rules={{ required: true }}
                        render={({ field }) => (
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                {...field}
                                value={field.value || ''}
                                onChange={(e) => field.onChange(e.target.value)}
                            >
                                <FormControlLabel value="Found myself" control={<Radio />} label="Found myself" />
                                <FormControlLabel value="Social media" control={<Radio />} label="Social Media" />
                                <FormControlLabel value="Friends" control={<Radio />} label="Friends" />
                            </RadioGroup>
                        )}
                    />
                   
                </FormControl>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
};

export { Registration };