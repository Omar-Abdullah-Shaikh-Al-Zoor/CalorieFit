import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-workout-page',
  templateUrl: './workout-page.component.html',
  styleUrls: ['./workout-page.component.css']
})
export class WorkoutPageComponent implements OnInit {
  // @Input() weeklyAvailability: string;
  weeklyAvailability: string = "three";
  workoutPlan: any[] = [];

  ngOnInit(): void {
    this.generateWorkoutPlan();
  }

  generateWorkoutPlan(): void {
    switch (this.weeklyAvailability) {
      case 'once':
        // Full-body workout for one day
        this.workoutPlan = [
          { workout: 'Incline bench press', muscleGroup: 'Chest', instructions: 'Lie on an incline bench (angled up). Grip the bar with hands slightly wider than shoulder-width, lower it to your upper chest, and press back up.' },
          { workout: 'Flat bench press', muscleGroup: 'Chest', instructions: 'Lie on a flat bench. Grip the bar with hands slightly wider than shoulder-width, lower it to your chest, and push back up.' },
          { workout: 'Chest flies', muscleGroup: 'Chest', instructions: 'Lie on a flat bench, holding dumbbells with arms straight above your chest. Slowly open your arms to the sides, keeping a slight bend in your elbows, then bring them back up.' },
          { workout: 'Lateral raises', muscleGroup: 'Shoulders', instructions: 'Stand holding dumbbells at your sides, raise your arms out to the sides until they’re shoulder height, and lower them back down.' },
          { workout: 'Shoulder press', muscleGroup: 'Shoulders', instructions: 'Sit or stand holding dumbbells at shoulder height, press them straight up, and lower them back down.' },
          { workout: 'Triceps overhead extension', muscleGroup: 'Triceps', instructions: 'Hold one dumbbell with both hands above your head, lower it behind your head, then extend your arms straight up.' },
          { workout: 'Triceps pulldown', muscleGroup: 'Triceps', instructions: 'Stand in front of a cable machine with a straight bar. Grip the bar, keep your elbows by your sides, and push the bar down until your arms are fully extended.' },
          { workout: 'Lat pulldown', muscleGroup: 'Back', instructions: 'Sit at a cable machine and grip the bar with hands wider than shoulder-width. Pull the bar down to your chest, then release back up.' },
          { workout: 'Seated rows', muscleGroup: 'Back', instructions: 'Sit on a rowing machine, grip the handle, and pull it towards your torso while keeping your back straight. Release back slowly.' },
          { workout: 'Cable curls', muscleGroup: 'Biceps', instructions: 'Stand facing a cable machine, grip the bar, and curl it up towards your chest. Lower back down slowly.' },
          { workout: 'Hammer curls', muscleGroup: 'Biceps', instructions: 'Hold dumbbells at your sides with palms facing each other. Curl the weights up while keeping your wrists straight, then lower back down.' },
          { workout: 'Leg press', muscleGroup: 'Legs', instructions: 'Sit on a leg press machine, place your feet shoulder-width apart on the platform, and push it away from your body using your legs.' },
          { workout: 'Leg extensions', muscleGroup: 'Legs', instructions: 'Sit on a leg extension machine, place your legs under the pad, and extend your legs straight out.' },
          { workout: 'Leg curls', muscleGroup: 'Legs', instructions: 'Lie face down on a leg curl machine, hook your legs under the pad, and curl your legs towards your buttocks.' }
        ];
        break;

      case 'three':
        // Push, Pull, Legs routine
        this.workoutPlan = [
          { workout: 'Incline bench press', day: 'Day 1 (Push)', muscleGroup: 'Chest', instructions: 'Lie on an incline bench (angled up). Grip the bar with hands slightly wider than shoulder-width, lower it to your upper chest, and press back up.' },
          { workout: 'Flat bench press', day: 'Day 1 (Push)', muscleGroup: 'Chest', instructions: 'Lie on a flat bench. Grip the bar with hands slightly wider than shoulder-width, lower it to your chest, and push back up.' },
          { workout: 'Chest flies', day: 'Day 1 (Push)', muscleGroup: 'Chest', instructions: 'Lie on a flat bench, holding dumbbells with arms straight above your chest. Slowly open your arms to the sides, keeping a slight bend in your elbows, then bring them back up.' },
          { workout: 'decline chest press', day: 'Day 1 (Push)', muscleGroup: 'Chest', instructions: 'Lie on a decline bench (angled down). Grip the bar with hands slightly wider than shoulder-width, lower it to your lower chest, and push back up.' },
          { workout: 'One arm triceps extension', day: 'Day 1 (Push)', muscleGroup: 'Triceps', instructions: 'Hold a dumbbell in one hand, raise it above your head, and lower it behind your head by bending the elbow. Extend the arm back up.' },
          { workout: 'Triceps overhead extension', day: 'Day 1 (Push)', muscleGroup: 'Triceps', instructions: 'Hold one dumbbell with both hands above your head, lower it behind your head, then extend your arms straight up.' },
          { workout: 'Triceps pulldown', day: 'Day 1 (Push)', muscleGroup: 'Triceps', instructions: 'Stand in front of a cable machine with a straight bar. Grip the bar, keep your elbows by your sides, and push the bar down until your arms are fully extended.' },

          { workout: 'Pull-ups (assisted if needed)', day: 'Day 2 (Pull)', muscleGroup: 'Back', instructions: 'Grip a pull-up bar with palms facing away, pull your body up until your chin is over the bar, then lower back down. Use an assisted machine if needed.' },
          { workout: 'Lat pulldown', day: 'Day 2 (Pull)', muscleGroup: 'Back', instructions: 'Sit at a cable machine and grip the bar with hands wider than shoulder-width. Pull the bar down to your chest, then release back up.' },
          { workout: 'Seated rows', day: 'Day 2 (Pull)', muscleGroup: 'Back', instructions: 'Sit on a rowing machine, grip the handle, and pull it towards your torso while keeping your back straight. Release back slowly.' },
          { workout: 'Straight arm pulldown', day: 'Day 2 Pull', muscleGroup: 'Back', instructions: 'Stand in front of a cable machine, grip the bar with straight arms, and pull it down to your thighs while keeping your arms straight.' },
          { workout: 'Cable curls', day: 'Day 2 (Pull)', muscleGroup: 'Biceps', instructions: 'Stand facing a cable machine, grip the bar, and curl it up towards your chest. Lower back down slowly.' },
          { workout: 'Hammer curls', day: 'Day 2 (Pull)', muscleGroup: 'Biceps', instructions: 'Hold dumbbells at your sides with palms facing each other. Curl the weights up while keeping your wrists straight, then lower back down.' },
          { workout: 'Preacher curls', day: 'Day 2 (Pull)', muscleGroup: 'Biceps', instructions: 'Sit at a preacher curl bench, place your arms on the pad, and curl the bar up, then lower it slowly.' },

          { workout: 'Leg press', day: 'Day 3 (Legs & Shoulders)', muscleGroup: 'Legs', instructions: 'Sit on a leg press machine, place your feet shoulder-width apart on the platform, and push it away from your body using your legs.' },
          { workout: 'Leg extensions', day: 'Day 3 (Legs & Shoulders)', muscleGroup: 'Legs', instructions: 'Sit on a leg extension machine, place your legs under the pad, and extend your legs straight out.' },
          { workout: 'Leg curls', day: 'Day 3 (Legs & Shoulders)', muscleGroup: 'Legs', instructions: 'Lie face down on a leg curl machine, hook your legs under the pad, and curl your legs towards your buttocks.' },
          { workout: 'Calf raises', day: 'Day 3 (Legs & Shoulders)', muscleGroup: 'Legs', instructions: 'Stand with your feet shoulder-width apart and raise your heels off the ground. Lower back down.' },
          { workout: 'Lateral raises', day: 'Day 3 (Legs & Shoulders)', muscleGroup: 'Shoulders', instructions: 'Stand holding dumbbells at your sides, raise your arms out to the sides until they’re shoulder height, and lower them back down.' },
          { workout: 'Shoulder press', day: 'Day 3 (Legs & Shoulders)', muscleGroup: 'Shoulders', instructions: 'Sit or stand holding dumbbells at shoulder height, press them straight up, and lower them back down.' },
          { workout: 'Reverse flies', day: 'Day 3 (Legs & Shoulders)', muscleGroup: 'Shoulders', instructions: 'Bend forward at the waist while holding dumbbells. With a slight bend in your elbows, raise your arms out to the sides, then lower them back.' },
        ];
        break;

      case 'four':
        // Upper, Lower, Upper, Lower routine
        this.workoutPlan = [
          { workout: 'Incline bench press', day: 'Day 1 (Chest, triceps & shoulders)', muscleGroup: 'Chest', instructions: 'Lie on an incline bench (angled up). Grip the bar with hands slightly wider than shoulder-width, lower it to your upper chest, and press back up.' },
          { workout: 'Flat bench press', day: 'Day 1 (Chest, triceps & shoulders)', muscleGroup: 'Chest', instructions: 'Lie on a flat bench. Grip the bar with hands slightly wider than shoulder-width, lower it to your chest, and push back up.' },
          { workout: 'Chest flies', day: 'Day 1 (Chest, triceps & shoulders)', muscleGroup: 'Chest', instructions: 'Lie on a flat bench, holding dumbbells with arms straight above your chest. Slowly open your arms to the sides, keeping a slight bend in your elbows, then bring them back up.' },
          { workout: 'decline chest press', day: 'Day 1 (Chest, triceps & shoulders)', muscleGroup: 'Chest', instructions: 'Lie on a decline bench (angled down). Grip the bar with hands slightly wider than shoulder-width, lower it to your lower chest, and push back up.' },

          { workout: 'One arm triceps extension', day: 'Day 1 (Chest, triceps & shoulders)', muscleGroup: 'Triceps', instructions: 'Hold a dumbbell in one hand, raise it above your head, and lower it behind your head by bending the elbow. Extend the arm back up.' },
          { workout: 'Triceps overhead extension',day: 'Day 1 (Chest, triceps & shoulders)', muscleGroup: 'Triceps', instructions: 'Hold one dumbbell with both hands above your head, lower it behind your head, then extend your arms straight up.' },
          { workout: 'Triceps pulldown', day: 'Day 1 (Chest, triceps & shoulders)', muscleGroup: 'Triceps', instructions: 'Stand in front of a cable machine with a straight bar. Grip the bar, keep your elbows by your sides, and push the bar down until your arms are fully extended.' },

          { workout: 'Lateral raises', day: 'Day 1 (Chest, triceps & shoulders)', muscleGroup: 'Shoulders', instructions: 'Stand holding dumbbells at your sides, raise your arms out to the sides until they’re shoulder height, and lower them back down.' },
          { workout: 'Shoulder press', day: 'Day 1 (Chest, triceps & shoulders)', muscleGroup: 'Shoulders', instructions: 'Sit or stand holding dumbbells at shoulder height, press them straight up, and lower them back down.' },
          { workout: 'Reverse flies', day: 'Day 1 (Chest, triceps & shoulders)', muscleGroup: 'Shoulders', instructions: 'Bend forward at the waist while holding dumbbells. With a slight bend in your elbows, raise your arms out to the sides, then lower them back.' },

      
          { workout: 'Pull-ups (assisted if needed)', day: 'Day 2 (Back & biceps)', muscleGroup: 'Back', instructions: 'Grip a pull-up bar with palms facing away, pull your body up until your chin is over the bar, then lower back down. Use an assisted machine if needed.' },
          { workout: 'Lat pulldown', day: 'Day 2 (Back & biceps)', muscleGroup: 'Back', instructions: 'Sit at a cable machine and grip the bar with hands wider than shoulder-width. Pull the bar down to your chest, then release back up.' },
          { workout: 'Seated rows', day: 'Day 2 (Back & biceps)', muscleGroup: 'Back', instructions: 'Sit on a rowing machine, grip the handle, and pull it towards your torso while keeping your back straight. Release back slowly.' },
          { workout: 'Straight arm pulldown', day: 'Day 2 (Back & biceps)', muscleGroup: 'Back', instructions: 'Stand in front of a cable machine, grip the bar with straight arms, and pull it down to your thighs while keeping your arms straight.' },

          { workout: 'Cable curls', day: 'Day 2 (Back & biceps)', muscleGroup: 'Biceps', instructions: 'Stand facing a cable machine, grip the bar, and curl it up towards your chest. Lower back down slowly.' },
          { workout: 'Hammer curls', day: 'Day 2 (Back & biceps)', muscleGroup: 'Biceps', instructions: 'Hold dumbbells at your sides with palms facing each other. Curl the weights up while keeping your wrists straight, then lower back down.' },
          { workout: 'Preacher curls', day: 'Day 2 (Back & biceps)', muscleGroup: 'Biceps', instructions: 'Sit at a preacher curl bench, place your arms on the pad, and curl the bar up, then lower it slowly.' },


          { workout: 'Incline bench press', day: 'Day 3 (Chest, triceps & shoulders)', muscleGroup: 'Chest', instructions: 'Lie on an incline bench (angled up). Grip the bar with hands slightly wider than shoulder-width, lower it to your upper chest, and press back up.' },
          { workout: 'Flat bench press', day: 'Day 3 (Chest, triceps & shoulders)', muscleGroup: 'Chest', instructions: 'Lie on a flat bench. Grip the bar with hands slightly wider than shoulder-width, lower it to your chest, and push back up.' },
          { workout: 'Chest flies', day: 'Day 3 (Chest, triceps & shoulders)', muscleGroup: 'Chest', instructions: 'Lie on a flat bench, holding dumbbells with arms straight above your chest. Slowly open your arms to the sides, keeping a slight bend in your elbows, then bring them back up.' },
          { workout: 'decline chest press', day: 'Day 3 (Chest, triceps & shoulders)', muscleGroup: 'Chest', instructions: 'Lie on a decline bench (angled down). Grip the bar with hands slightly wider than shoulder-width, lower it to your lower chest, and push back up.' },

          { workout: 'One arm triceps extension', day: 'Day 3 (Chest, triceps & shoulders)', muscleGroup: 'Triceps', instructions: 'Hold a dumbbell in one hand, raise it above your head, and lower it behind your head by bending the elbow. Extend the arm back up.' },
          { workout: 'Triceps overhead extension',day: 'Day 3 (Chest, triceps & shoulders)', muscleGroup: 'Triceps', instructions: 'Hold one dumbbell with both hands above your head, lower it behind your head, then extend your arms straight up.' },
          { workout: 'Triceps pulldown', day: 'Day 3 (Chest, triceps & shoulders)', muscleGroup: 'Triceps', instructions: 'Stand in front of a cable machine with a straight bar. Grip the bar, keep your elbows by your sides, and push the bar down until your arms are fully extended.' },

          { workout: 'Lateral raises', day: 'Day 3 (Chest, triceps & shoulders)', muscleGroup: 'Shoulders', instructions: 'Stand holding dumbbells at your sides, raise your arms out to the sides until they’re shoulder height, and lower them back down.' },
          { workout: 'Shoulder press', day: 'Day 3 (Chest, triceps & shoulders)', muscleGroup: 'Shoulders', instructions: 'Sit or stand holding dumbbells at shoulder height, press them straight up, and lower them back down.' },
          { workout: 'Reverse flies', day: 'Day 3 (Chest, triceps & shoulders)', muscleGroup: 'Shoulders', instructions: 'Bend forward at the waist while holding dumbbells. With a slight bend in your elbows, raise your arms out to the sides, then lower them back.' },


          { workout: 'Pull-ups (assisted if needed)', day: 'Day 4 (Back & biceps & legs)', muscleGroup: 'Back', instructions: 'Grip a pull-up bar with palms facing away, pull your body up until your chin is over the bar, then lower back down. Use an assisted machine if needed.' },
          { workout: 'Lat pulldown', day: 'Day 4 (Back & biceps & legs)', muscleGroup: 'Back', instructions: 'Sit at a cable machine and grip the bar with hands wider than shoulder-width. Pull the bar down to your chest, then release back up.' },
          { workout: 'Seated rows', day: 'Day 4 (Back & biceps & legs)', muscleGroup: 'Back', instructions: 'Sit on a rowing machine, grip the handle, and pull it towards your torso while keeping your back straight. Release back slowly.' },
          { workout: 'Straight arm pulldown', day: 'Day 4 (Back & biceps & legs)', muscleGroup: 'Back', instructions: 'Stand in front of a cable machine, grip the bar with straight arms, and pull it down to your thighs while keeping your arms straight.' },

          { workout: 'Cable curls', day: 'Day 4 (Back & biceps & legs)', muscleGroup: 'Biceps', instructions: 'Stand facing a cable machine, grip the bar, and curl it up towards your chest. Lower back down slowly.' },
          { workout: 'Hammer curls', day: 'Day 4 (Back & biceps & legs)', muscleGroup: 'Biceps', instructions: 'Hold dumbbells at your sides with palms facing each other. Curl the weights up while keeping your wrists straight, then lower back down.' },
          { workout: 'Preacher curls', day: 'Day 4 (Back & biceps & legs)', muscleGroup: 'Biceps', instructions: 'Sit at a preacher curl bench, place your arms on the pad, and curl the bar up, then lower it slowly.' },
       
          { workout: 'Leg press', day: 'Day 4 (Back & biceps & legs)', muscleGroup: 'Legs', instructions: 'Sit on a leg press machine, place your feet shoulder-width apart on the platform, and push it away from your body using your legs.' },
          { workout: 'Leg extensions', day: 'Day 4 (Back & biceps & legs)', muscleGroup: 'Legs', instructions: 'Sit on a leg extension machine, place your legs under the pad, and extend your legs straight out.' },
          { workout: 'Leg curls', day: 'Day 4 (Back & biceps & legs)', muscleGroup: 'Legs', instructions: 'Lie face down on a leg curl machine, hook your legs under the pad, and curl your legs towards your buttocks.' },
          { workout: 'Calf raises', day: 'Day 4 (Back & biceps & legs)', muscleGroup: 'Legs', instructions: 'Stand with your feet shoulder-width apart and raise your heels off the ground. Lower back down.' },
        ];
        break;

      case 'six':
        // Repeat the three-day plan twice
        this.workoutPlan = [
          { workout: 'Incline bench press', day: 'Day 1 (Push)', muscleGroup: 'Chest', instructions: 'Lie on an incline bench (angled up). Grip the bar with hands slightly wider than shoulder-width, lower it to your upper chest, and press back up.' },
          { workout: 'Flat bench press', day: 'Day 1 (Push)', muscleGroup: 'Chest', instructions: 'Lie on a flat bench. Grip the bar with hands slightly wider than shoulder-width, lower it to your chest, and push back up.' },
          { workout: 'Chest flies', day: 'Day 1 (Push)', muscleGroup: 'Chest', instructions: 'Lie on a flat bench, holding dumbbells with arms straight above your chest. Slowly open your arms to the sides, keeping a slight bend in your elbows, then bring them back up.' },
          { workout: 'decline chest press', day: 'Day 1 (Push)', muscleGroup: 'Chest', instructions: 'Lie on a decline bench (angled down). Grip the bar with hands slightly wider than shoulder-width, lower it to your lower chest, and push back up.' },
          { workout: 'One arm triceps extension', day: 'Day 1 (Push)', muscleGroup: 'Triceps', instructions: 'Hold a dumbbell in one hand, raise it above your head, and lower it behind your head by bending the elbow. Extend the arm back up.' },
          { workout: 'Triceps overhead extension', day: 'Day 1 (Push)', muscleGroup: 'Triceps', instructions: 'Hold one dumbbell with both hands above your head, lower it behind your head, then extend your arms straight up.' },
          { workout: 'Triceps pulldown', day: 'Day 1 (Push)', muscleGroup: 'Triceps', instructions: 'Stand in front of a cable machine with a straight bar. Grip the bar, keep your elbows by your sides, and push the bar down until your arms are fully extended.' },

          { workout: 'Pull-ups (assisted if needed)', day: 'Day 2 (Pull)', muscleGroup: 'Back', instructions: 'Grip a pull-up bar with palms facing away, pull your body up until your chin is over the bar, then lower back down. Use an assisted machine if needed.' },
          { workout: 'Lat pulldown', day: 'Day 2 (Pull)', muscleGroup: 'Back', instructions: 'Sit at a cable machine and grip the bar with hands wider than shoulder-width. Pull the bar down to your chest, then release back up.' },
          { workout: 'Seated rows', day: 'Day 2 (Pull)', muscleGroup: 'Back', instructions: 'Sit on a rowing machine, grip the handle, and pull it towards your torso while keeping your back straight. Release back slowly.' },
          { workout: 'Straight arm pulldown', day: 'Day 2 Pull', muscleGroup: 'Back', instructions: 'Stand in front of a cable machine, grip the bar with straight arms, and pull it down to your thighs while keeping your arms straight.' },
          { workout: 'Cable curls', day: 'Day 2 (Pull)', muscleGroup: 'Biceps', instructions: 'Stand facing a cable machine, grip the bar, and curl it up towards your chest. Lower back down slowly.' },
          { workout: 'Hammer curls', day: 'Day 2 (Pull)', muscleGroup: 'Biceps', instructions: 'Hold dumbbells at your sides with palms facing each other. Curl the weights up while keeping your wrists straight, then lower back down.' },
          { workout: 'Preacher curls', day: 'Day 2 (Pull)', muscleGroup: 'Biceps', instructions: 'Sit at a preacher curl bench, place your arms on the pad, and curl the bar up, then lower it slowly.' },

          { workout: 'Leg press', day: 'Day 3 (Legs & Shoulders)', muscleGroup: 'Legs', instructions: 'Sit on a leg press machine, place your feet shoulder-width apart on the platform, and push it away from your body using your legs.' },
          { workout: 'Leg extensions', day: 'Day 3 (Legs & Shoulders)', muscleGroup: 'Legs', instructions: 'Sit on a leg extension machine, place your legs under the pad, and extend your legs straight out.' },
          { workout: 'Leg curls', day: 'Day 3 (Legs & Shoulders)', muscleGroup: 'Legs', instructions: 'Lie face down on a leg curl machine, hook your legs under the pad, and curl your legs towards your buttocks.' },
          { workout: 'Calf raises', day: 'Day 3 (Legs & Shoulders)', muscleGroup: 'Legs', instructions: 'Stand with your feet shoulder-width apart and raise your heels off the ground. Lower back down.' },
          { workout: 'Lateral raises', day: 'Day 3 (Legs & Shoulders)', muscleGroup: 'Shoulders', instructions: 'Stand holding dumbbells at your sides, raise your arms out to the sides until they’re shoulder height, and lower them back down.' },
          { workout: 'Shoulder press', day: 'Day 3 (Legs & Shoulders)', muscleGroup: 'Shoulders', instructions: 'Sit or stand holding dumbbells at shoulder height, press them straight up, and lower them back down.' },
          { workout: 'Reverse flies', day: 'Day 3 (Legs & Shoulders)', muscleGroup: 'Shoulders', instructions: 'Bend forward at the waist while holding dumbbells. With a slight bend in your elbows, raise your arms out to the sides, then lower them back.' },
        
          { workout: 'Incline bench press', day: 'Day 4 (Push)', muscleGroup: 'Chest', instructions: 'Lie on an incline bench (angled up). Grip the bar with hands slightly wider than shoulder-width, lower it to your upper chest, and press back up.' },
          { workout: 'Flat bench press', day: 'Day 4 (Push)', muscleGroup: 'Chest', instructions: 'Lie on a flat bench. Grip the bar with hands slightly wider than shoulder-width, lower it to your chest, and push back up.' },
          { workout: 'Chest flies', day: 'Day 4 (Push)', muscleGroup: 'Chest', instructions: 'Lie on a flat bench, holding dumbbells with arms straight above your chest. Slowly open your arms to the sides, keeping a slight bend in your elbows, then bring them back up.' },
          { workout: 'decline chest press', day: 'Day 4 (Push)', muscleGroup: 'Chest', instructions: 'Lie on a decline bench (angled down). Grip the bar with hands slightly wider than shoulder-width, lower it to your lower chest, and push back up.' },
          { workout: 'One arm triceps extension', day: 'Day 4 (Push)', muscleGroup: 'Triceps', instructions: 'Hold a dumbbell in one hand, raise it above your head, and lower it behind your head by bending the elbow. Extend the arm back up.' },
          { workout: 'Triceps overhead extension', day: 'Day 4 (Push)', muscleGroup: 'Triceps', instructions: 'Hold one dumbbell with both hands above your head, lower it behind your head, then extend your arms straight up.' },
          { workout: 'Triceps pulldown', day: 'Day 4 (Push)', muscleGroup: 'Triceps', instructions: 'Stand in front of a cable machine with a straight bar. Grip the bar, keep your elbows by your sides, and push the bar down until your arms are fully extended.' },

          { workout: 'Pull-ups (assisted if needed)', day: 'Day 5 (Pull)', muscleGroup: 'Back', instructions: 'Grip a pull-up bar with palms facing away, pull your body up until your chin is over the bar, then lower back down. Use an assisted machine if needed.' },
          { workout: 'Lat pulldown', day: 'Day 5 (Pull)', muscleGroup: 'Back', instructions: 'Sit at a cable machine and grip the bar with hands wider than shoulder-width. Pull the bar down to your chest, then release back up.' },
          { workout: 'Seated rows', day: 'Day 5 (Pull)', muscleGroup: 'Back', instructions: 'Sit on a rowing machine, grip the handle, and pull it towards your torso while keeping your back straight. Release back slowly.' },
          { workout: 'Straight arm pulldown', day: 'Day 5 Pull', muscleGroup: 'Back', instructions: 'Stand in front of a cable machine, grip the bar with straight arms, and pull it down to your thighs while keeping your arms straight.' },
          { workout: 'Cable curls', day: 'Day 5 (Pull)', muscleGroup: 'Biceps', instructions: 'Stand facing a cable machine, grip the bar, and curl it up towards your chest. Lower back down slowly.' },
          { workout: 'Hammer curls', day: 'Day 5 (Pull)', muscleGroup: 'Biceps', instructions: 'Hold dumbbells at your sides with palms facing each other. Curl the weights up while keeping your wrists straight, then lower back down.' },
          { workout: 'Preacher curls', day: 'Day 5 (Pull)', muscleGroup: 'Biceps', instructions: 'Sit at a preacher curl bench, place your arms on the pad, and curl the bar up, then lower it slowly.' },

          { workout: 'Leg press', day: 'Day 6 (Legs & Shoulders)', muscleGroup: 'Legs', instructions: 'Sit on a leg press machine, place your feet shoulder-width apart on the platform, and push it away from your body using your legs.' },
          { workout: 'Leg extensions', day: 'Day 6 (Legs & Shoulders)', muscleGroup: 'Legs', instructions: 'Sit on a leg extension machine, place your legs under the pad, and extend your legs straight out.' },
          { workout: 'Leg curls', day: 'Day 6 (Legs & Shoulders)', muscleGroup: 'Legs', instructions: 'Lie face down on a leg curl machine, hook your legs under the pad, and curl your legs towards your buttocks.' },
          { workout: 'Calf raises', day: 'Day 6 (Legs & Shoulders)', muscleGroup: 'Legs', instructions: 'Stand with your feet shoulder-width apart and raise your heels off the ground. Lower back down.' },
          { workout: 'Lateral raises', day: 'Day 6 (Legs & Shoulders)', muscleGroup: 'Shoulders', instructions: 'Stand holding dumbbells at your sides, raise your arms out to the sides until they’re shoulder height, and lower them back down.' },
          { workout: 'Shoulder press', day: 'Day 6 (Legs & Shoulders)', muscleGroup: 'Shoulders', instructions: 'Sit or stand holding dumbbells at shoulder height, press them straight up, and lower them back down.' },
          { workout: 'Reverse flies', day: 'Day 6 (Legs & Shoulders)', muscleGroup: 'Shoulders', instructions: 'Bend forward at the waist while holding dumbbells. With a slight bend in your elbows, raise your arms out to the sides, then lower them back.' },
        
        ];
        break;

      default:
        this.workoutPlan = [];
    }
  }
}
