from django.db import models

class Artist(models.Model):
    name = models.CharField(max_length=25)

    def __str__(self):
        return "{}: {}".format(self.id, self.name)

class Album(models.Model):
    name = models.CharField(max_length=25)
    artist = models.ForeignKey(Artist, related_name='artist')

    def __str__(self):
        return "{}: {}".format(self.id, self.name)

class Track(models.Model):
    name = models.CharField(max_length=25)
    album = models.ForeignKey(Album, related_name='album')

    def __str__(self):
        return "{}: {}".format(self.id, self.name)
