from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Leaderboard, Workout

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        # Clear existing data
        User.objects.all().delete()
        Team.objects.all().delete()
        Activity.objects.all().delete()
        Leaderboard.objects.all().delete()
        Workout.objects.all().delete()

        # Create teams
        marvel = Team.objects.create(name='marvel', description='Marvel superheroes')
        dc = Team.objects.create(name='dc', description='DC superheroes')

        # Create users
        users = [
            User(email='ironman@marvel.com', name='Iron Man', team='marvel', superpower='Tech Genius'),
            User(email='captain@marvel.com', name='Captain America', team='marvel', superpower='Super Soldier'),
            User(email='spiderman@marvel.com', name='Spider-Man', team='marvel', superpower='Spider Sense'),
            User(email='batman@dc.com', name='Batman', team='dc', superpower='Detective'),
            User(email='superman@dc.com', name='Superman', team='dc', superpower='Flight'),
            User(email='wonderwoman@dc.com', name='Wonder Woman', team='dc', superpower='Strength'),
        ]
        for user in users:
            user.save()

        # Create activities
        Activity.objects.create(user=users[0], type='run', duration=30, date='2026-02-10')
        Activity.objects.create(user=users[1], type='cycle', duration=45, date='2026-02-09')
        Activity.objects.create(user=users[3], type='swim', duration=60, date='2026-02-08')

        # Create leaderboard
        Leaderboard.objects.create(team=marvel, points=150)
        Leaderboard.objects.create(team=dc, points=120)

        # Create workouts
        Workout.objects.create(name='Pushups', description='Do pushups', suggested_for='marvel')
        Workout.objects.create(name='Situps', description='Do situps', suggested_for='dc')

        self.stdout.write(self.style.SUCCESS('Database populated with test data.'))
